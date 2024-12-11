import { DISCORD_TOKEN } from "../consts";
import { Panic } from "../functions";

export async function createPost(channelId: string, content: string) {
    console.log("Creating post");
    const url = `https://discord.com/api/v10/channels/${channelId}/threads`;
    const token = DISCORD_TOKEN;

    console.log("Token Length:", token?.length);
  
    const body = {
      name: "New Update",
      message: {content},
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok)
      return Panic(response.statusText);

    const data = await response.json().then(()=>0, Panic);
    if(!data)
      return Panic("Failed to parse discord response.");

    console.log('Post created successfully!');
    return 0;
}