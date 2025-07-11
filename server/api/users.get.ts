export default defineEventHandler(async () => {
  const users = await useDb().select({
    name: tables.user.name,
  }).from(tables.user).all()
  return users
})
