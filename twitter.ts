export async function fetchTwitterProfile(username: string, bearerToken: string) {
  const res = await fetch(`https://api.twitter.com/2/users/by/username/${username}?user.fields=created_at,profile_image_url,public_metrics`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
  if (!res.ok) throw new Error("Gagal mengambil data akun");
  const { data } = await res.json();
  return {
    id: data.id,
    name: data.name,
    avatar: data.profile_image_url,
    followers: data.public_metrics.followers_count,
    tweets: data.public_metrics.tweet_count,
    createdAt: new Date(data.created_at),
  };
}