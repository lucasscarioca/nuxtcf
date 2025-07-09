export default defineEventHandler(async (event) => {
  const users = await useDb(event).select({
    name: tables.users.name,
  }).from(tables.users).all()
  return users
})
