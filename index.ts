const bearerToken = "eyJhbGciOiJFUzI1NiJ9.eyJhY2NvdW50X2lkIjoiNjFlM2Q2YmItMTgzYS1kMzk0LTEyMTUtMDY1MzU1YjE3N2MyIiwiaWRfd2FsbGV0X2FkZHJlc3NfZXRoIjoiMHhiMGYyODk2YjkwNzU4YTcxZjAyZDI0MzA2ZGRiOGE1ODhhMzFmODI3IiwiaWRfd2FsbGV0X2FkZHJlc3Nfc3VyaSI6IjVDd293aDVqeEhadlE4bkpXTUFzNkVYZDRHaWF2S3NkN0EzY3lKU2k0ZDluVHJkaCIsImlkX3dhbGxldF9hZGRyZXNzIjoiMHhiMGYyODk2YjkwNzU4YTcxZjAyZDI0MzA2ZGRiOGE1ODhhMzFmODI3IiwiYmxvY2tjaGFpbl9uZXR3b3JrIjoiVEVTVE5FVCIsInB1cnBvc2UiOiJzYW5kYm94IiwiaWF0IjoxNjkyNTA4NjgzLCJzdWIiOiI2MWUzZDZiYi0xODNhLWQzOTQtMTIxNS0wNjUzNTViMTc3YzIiLCJpc3MiOiJhcGkud2ViM2Nvbm5lY3QuanAiLCJhdWQiOiJ0aHhuZXRfZW5kX3VzZXIiLCJleHAiOjE2OTUxMDA2ODN9.3VZOYiqDmeFuc-7D3Rw2MbL0YSdmjpwN256sHxiTi-0eenqreVP17zv__BV1vLwGhtf8zQ9UtLHf0pNKTlBdjw";
const baseURL = "https://api.helpers.testnet.thxnet.org/rest/v0";
const path = "/my_id_wallet/testnet_leafchain_sandbox/ft";

const main = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers:{
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      }
    })
    const json = await res.json();
    console.log(json);
  } catch {
    console.error('error');
  }
}

main(baseURL + path);