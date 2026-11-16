// Helper function to check how different two words are (handles small spelling mistakes)
function getWordDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[m][n];
}

// Check how well the text matches what the user typed
function scoreField(text, queryTokens) {
  if (!text) return Infinity;
  const textWords = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);

  let totalScore = 0;

  for (const qToken of queryTokens) {
    let bestTokenScore = Infinity;

    for (const tWord of textWords) {
      // 1. Exact match found
      if (tWord === qToken) {
        bestTokenScore = Math.min(bestTokenScore, 0);
        break;
      }

      // 2. Word starts with the typed letters
      if (tWord.startsWith(qToken)) {
        bestTokenScore = Math.min(bestTokenScore, 0.2);
        continue;
      }

      // 3. Word contains the typed letters somewhere inside
      if (tWord.includes(qToken)) {
        bestTokenScore = Math.min(bestTokenScore, 0.5);
        continue;
      }

      // 4. Word has a slight typo (like 1 or 2 letters off)
      const maxAllowedDistance = qToken.length <= 3 ? 1 : qToken.length <= 6 ? 2 : 3;
      const dist = getWordDistance(qToken, tWord);

      if (dist <= maxAllowedDistance) {
        const penalty = 0.8 + (dist / qToken.length);
        bestTokenScore = Math.min(bestTokenScore, penalty);
      }
    }

    // If one of the search words didn't match anything, skip this item
    if (bestTokenScore === Infinity) {
      return Infinity;
    }

    totalScore += bestTokenScore;
  }

  return totalScore;
}

// Main search function: searches title, category, brand, and description
export function fuzzySearch(items, query, keys = [
  { name: 'title', weight: 3 },
  { name: 'category', weight: 2 },
  { name: 'brand', weight: 1.8 },
  { name: 'description', weight: 0.8 },
]) {
  // If search bar is empty, return everything
  if (!query || !query.trim()) return items;

  // Split user search into separate clean words
  const queryTokens = query
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);

  if (queryTokens.length === 0) return items;

  const scoredItems = [];

  // Check each product and give it a match score
  for (const item of items) {
    let bestScore = Infinity;

    for (const key of keys) {
      const val = item[key.name];
      if (typeof val === 'string') {
        const score = scoreField(val, queryTokens);
        if (score !== Infinity) {
          const weightedScore = score / (key.weight || 1);
          if (weightedScore < bestScore) {
            bestScore = weightedScore;
          }
        }
      }
    }

    if (bestScore !== Infinity) {
      scoredItems.push({ item, score: bestScore });
    }
  }

  // Put the best matches first (lowest score = closest match)
  scoredItems.sort((a, b) => a.score - b.score);

  return scoredItems.map((entry) => entry.item);
}
