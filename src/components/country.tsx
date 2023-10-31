export default async function Country({ country }: { country: string }) {
  const res = await import(`#/country_icons/${country}.svg`)
  const Country = res.default
  return <Country />
}
