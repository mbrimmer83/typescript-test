import client from './client';

interface useFriendsByIdProps {
  userId?: string | null;
  enabled?: boolean;
  limit?: number;
}

export const useUserById = ({
  userId,
  enabled = true,
}: useFriendsByIdProps) => {
  // Response is any
  const response = client.getUserById.useQuery({
    queryKey: [userId],
    initialPageParam: undefined,
    enabled: enabled && !!userId,
  });

  return {
    ...response,
  };
};

export const useCreateUser = () => {
  const response = client.createUser.useMutation({
    // data is any
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return {
    ...response,
  };
};
