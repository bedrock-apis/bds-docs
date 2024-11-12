/**
 * 
 * @param {string} channelId 
 * @param {string} content 
 */
export async function createPost(channelId, content) {
    const url = `https://discord.com/api/v10/channels/${channelId}/messages`;
    const token = process.env["DISCORD_TOKEN"];
  
    const body = {
      content: content,
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
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Post created successfully!', data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
}