/**
 * Profile data for the ViewTransition reveal demo.
 * Note: real apps usually use the framework's Suspense-aware data layer.
 */
export interface Profile {
  name: string;
  handle: string;
  description: string;
  fallback: string;
  avatar: string;
}

export async function fetchProfile() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    name: "Mira Chen",
    handle: "@mira",
    description: "Design systems, San Francisco",
    fallback: "MC",
    avatar: "teal",
  };
}

export const TEAM = [
  { name: "Mira Chen", handle: "@mira", fallback: "MC", avatar: "teal" },
  { name: "Jonah Reed", handle: "@jonah", fallback: "JR", avatar: "slate" },
  { name: "Ada Okonkwo", handle: "@ada", fallback: "AO", avatar: "amber" },
  { name: "Leo Park", handle: "@leo", fallback: "LP", avatar: "rose" },
] as const;
