export const fetchAsArrayBuffer = async (url: string): Promise<ArrayBuffer> => {
  const request = new Request(url);
  const response = await fetch(request);
  const arrayBuffer = await response.arrayBuffer();

  return arrayBuffer;
};
