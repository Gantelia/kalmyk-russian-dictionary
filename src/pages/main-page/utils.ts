export const checkStatus = (response: Response) => {
  if (!response.ok) {
    throw new Error(`${response.status} : ${response.statusText}`);
  }
};
