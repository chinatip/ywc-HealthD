import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse my-2 my-lg-0" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item">
            <Link class="nav-link" to="/">หน้าแรก</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/missions">ภารกิจ</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/knowledge">เกร็ดความรู้</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">แคลอรี่</a>
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

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content" style={{ background: '#ef551f' }}>
    <div class="modal-head">
      <button type="button" style={{ position: 'absolute', right: '10px', top: '5px' }} class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form style={{ marginTop: '50px' }}>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="อีเมล" />
        </div>
        <div class="form-group" style={{ marginTop: '20px' }}>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="รหัสผ่าน" />
        </div>

        <h6 style={{ textAlign: 'left', color: 'white', opacity: 0.8 }}>ลืมรหัสผ่าน</h6>
        <button type="submit" class="btn btn-default" style={{ width: '100%', backgroundColor: 'transparent', border: '1px solid white', color: 'white', marginTop: '20px' }}>เข้าสู่ระบบ</button>
      </form>
    </div>
  </div>
</div>
</div>
    </div>
  );
}