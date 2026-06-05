import { getAllProfiles, getProfile, saveProfile } from "../models/Profile.js";
import { fetchGithubProfile } from "../services/githubTask.js";

export const analyzeProfileCon = async (req, res) => {
  try {
    const { username } = req.params;

    const githubData = await fetchGithubProfile(username);
    const createdDate = new Date(githubData.created_at);

    const score =
      githubData.public_repos * 2 +
      githubData.followers * 3 +
      githubData.public_gists;

    const profile = {
      github_id: githubData.id,
      username: githubData.login,
      name: githubData.name,
      bio: githubData.bio,
      avatar_url: githubData.avatar_url,
      profile_url: githubData.html_url,
      public_repos: githubData.public_repos,
      followers: githubData.followers,
      following: githubData.following,
      account_created_at: createdDate,
      analysis_score: score,
    };

    await saveProfile(profile);

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllProfilesCon = async (req, res) => {
  const data = await getAllProfiles();
  res.status(200).json(data);
};

export const getProfileCon = async (req, res) => {
  const data = await getProfile(req.params.username);
  res.status(200).json(data);
};
