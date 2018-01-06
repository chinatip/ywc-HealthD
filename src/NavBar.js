import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">หน้าแรก <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/missions">ภารกิจ</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">เกร็ดความรู้</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">การซื้อขาย</a>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/profile">โปรไฟล์</Link>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal" style={{ fontSize: 12 }}>ลงชื่อเข้าใช้</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}