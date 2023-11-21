import Link from 'next/link'
import './globals.css'

export default function Home() {
  return (
  <header class="header">
    <div class="hd_wrap">
        <div class="hd_logo">
          <Link href="https://nslab.tech/">
            <img src="/logo.png"/>
          </Link>
        </div>
        <ul class="menu">
          <li class="menu_li">
            <a href='/' class="menu_a">NSLAB</a>
            <ul class="submenu">
              <li>
                <a href="/">Vision</a>
              </li>
              <li>
                <a href="/">History</a>
              </li>
              <li>
                <a href="/">Location</a>
              </li>
            </ul>
          </li>

          <li class="menu_li">
            <a href='/' class="menu_a">Business</a>
            <ul class="submenu">
              <li>
                <a href="/">Metaverse</a>
              </li>
              <li>
                <a href="/">Blockchain</a>
              </li>
              <li>
                <a href="/">Defense S/W Dev.</a>
              </li>
              <li>
                <a href="/">Tech/Edu Consulting</a>
              </li>
            </ul>
          </li>

          <li class="menu_li">
            <a href='/' class="menu_a">Product</a>
            <ul class="submenu">
              <li>
                <a href="/">CREATIVIA</a>
              </li>
              <li>
                <a href="/">Pure wallet</a>
              </li>
            </ul>
          </li>

          <li class="menu_li">
            <a href='/' class="menu_a">Technical Skills</a>
            <ul class="submenu">
              <li>
                <a href="/">Naval Combat System</a>
              </li>
              <li>
                <a href="/">MMS</a>
              </li>
              <li>
                <a href="/">DDS</a>
              </li>
              <li>
                <a href="/">IPR</a>
              </li>
              <li>
                <a href="/">Publications</a>
              </li>
            </ul>
          </li>

          <li class="menu_li">
            <a href='/' class="menu_a">About</a>
            <ul class="submenu">
              <li>
                <a href="/">Cooperator</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Metaverse Issues</a>
              </li>
            </ul>
          </li>

          <li class="menu_li">
            <a href='/' class="menu_a">Contact</a>
            <ul class="submenu">
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Request</a>
              </li>
            </ul>
          </li>

          <li class="menu_li">
            <a href='/' class="menu_a">Cooperator</a>
            <ul class="submenu">
              <li>
                <a href="/">Domestic</a>
              </li>
              <li>
                <a href="/">intemational</a>
              </li>
            </ul>
          </li>

          <li class="menu_li">
            <a href='/' class="menu_a">Support</a>
            <ul class="submenu">
              <li>
                <a href="/">Notice</a>
              </li>
              <li>
                <a href="/">Contact NSLab</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="button">
          <a href="http://creativia.kr/"><button className='large-button'>CREATIVIA</button></a>
          <a href="/"><button className='large-button'>NSL</button></a>
        </div> 
    </div>
  </header>
  )
}
