export default function ({ store, redirect }) {
  if (!store.state.authUser || store.state.authUser.usertype !== 'admin') {
    return redirect('/')
  }
}
