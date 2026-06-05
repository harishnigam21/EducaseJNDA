import pool from "../config/db.js";

export const saveProfile = async (profile) => {
  const query = `
  INSERT INTO github_profiles (
    github_id,
    username,
    name,
    bio,
    avatar_url,
    profile_url,
    public_repos,
    followers,
    following,
    account_created_at,
    analysis_score
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

  ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    bio = VALUES(bio),
    public_repos = VALUES(public_repos),
    followers = VALUES(followers),
    following = VALUES(following),
    analysis_score = VALUES(analysis_score);
  `;

  await pool.execute(query, [
    profile.github_id,
    profile.username,
    profile.name,
    profile.bio,
    profile.avatar_url,
    profile.profile_url,
    profile.public_repos,
    profile.followers,
    profile.following,
    profile.account_created_at,
    profile.analysis_score,
  ]);
};

export const getAllProfiles = async () => {
  const [rows] = await pool.execute(
    "SELECT * FROM github_profiles ORDER BY analyzed_at DESC",
  );
  return rows;
};

export const getProfile = async (username) => {
  const [rows] = await pool.execute(
    "SELECT * FROM github_profiles WHERE username=?",
    [username],
  );

  return rows[0];
};
