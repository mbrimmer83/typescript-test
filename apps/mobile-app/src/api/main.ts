import client from './client';

interface useFriendsByIdProps {
  userId?: string | null;
  enabled?: boolean;
  limit?: number;
}

const useUserById = ({
  userId,
  enabled = true,
  limit = 20,
}: useFriendsByIdProps) => {
  const response = client.getUserById.useQuery({
    queryKey: [userId],
    // This is not typed and should be. Inference is broken since switching to pnpm
    onSuccess: (data) => {
      console.log(data);
    },
    initialPageParam: undefined,
    enabled: enabled && !!userId,
  });

  return {
    ...response,
  };
};

export default useUserById;
