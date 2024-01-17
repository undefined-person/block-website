import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();

  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = async () => {
    const account = accountQuery.data;
    if (!account) return;

    const newAccount = {
      ...account,
      isBlockingEnabled: !account.isBlockingEnabled,
    };

    await updateAccountMutation.mutateAsync(newAccount);
  };

  return {
    toggleBlocking,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled,
    isLoading: accountQuery.isPending || updateAccountMutation.isPending,
    isReady: accountQuery.isSuccess,
  };
}
