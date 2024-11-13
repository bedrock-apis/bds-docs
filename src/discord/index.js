import { DISCORD_TOKEN } from "../consts.js";

/**
 * 
 * @param {string} channelId 
 * @param {string} content 
 */
export async function createPost(channelId, content) {
    console.log("Creating post");
    const url = `https://discord.com/api/v14/channels/${channelId}/messages`;
    const token = DISCORD_TOKEN

    console.log("Token Length:", token?.length);
  
    const body = {
      name: "New Update",
      message: {content},
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bot ${token}`,
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        console.error(response.statusText);
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Post created successfully!', data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
}