const theme_home = document.querySelectorAll('.header__theme')

theme_home.forEach(s => {
  s.addEventListener('click', () => {
    const btn = s.querySelector('.header__theme_switch')
    btn.classList.toggle('on')
    document.body.classList.toggle('dark')
    s.classList.toggle('on')

    document.querySelectorAll('.main__item').forEach(a => {
      a.classList.toggle('on')
    })

    document.querySelector('.main__contacts')?.classList.toggle('on')

    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    )
  })
})