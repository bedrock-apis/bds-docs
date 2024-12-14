import { DISCORD_TOKEN } from "../consts";
import { Panic } from "../functions";

export async function createPost(channelId: string, title: string, content: string) {
    console.log("Creating post");
    const url = `https://discord.com/api/v10/channels/${channelId}/threads`;
    const token = DISCORD_TOKEN;

    console.log("Token Length:", token?.length);
  
    const body = {
      name: title,
      message: {
        content
      },
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

    const failed = await response.json().then(()=>0, Panic);
    if(failed)
      return Panic("Failed to parse discord response.");

    console.log('Post created successfully!');
    return 0;
}