<template>
      <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="../assets/img/logo/logo1.png" alt="Bootstrap" width="85" height="72" style="border-radius: 50%;">
          </a>
          <button class="navbar-toggler btn btn-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                    <a class="nav-link text-light hover" aria-current="page" href="#">Shop all</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light hover" href="#">Collections</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light hover" href="#">Calendar</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link text-light hover" href="login">Login</a>
                </li>
                <li class="nav-item text-light">
                    <a class="nav-link text-light" href="./Bootstrap登入頁.html">
                        <i class="bi bi-cart4"></i>
                    </a>
                </li>
                <li class="nav-item text-light dropdown">
                    <a class="nav-link text-light" href="#" dropdown-toggle  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle"></i>
                    </a>
                    <ul class="dropdown-menu" style="left: -100px;">
                        <li>
                            <a class="dropdown-item" href="./Bootstrap登入頁.html">login</a>
                        </li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
    </nav>
  </header>
</template>