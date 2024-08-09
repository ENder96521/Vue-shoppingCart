<template>
  <div class="container-filed myheight bg-dark">
    <div class="row myheight m-0">
        <div class="col-6 myheight bgleft p-0 d-none justify-content-between align-items-center d-md-flex flex-column">
            <div class="null"></div>
            <h2 class="text-light title" style="font-family: Playwrite BE VLG, cursive;">Select your own</h2>
            <div class="row">
                <div class="col-4 fs-3 text-light text-end"><i class="fa-brands fa-x-twitter"></i></div>
                <div class="col-4 fs-3 text-light text-center"><i class="fa-brands fa-facebook"></i></div>
                <div class="col-4 fs-3 text-light text-start"><i class="fa-brands fa-instagram"></i></div>
            </div>            
        </div>
        <div class="col-12 col-md-6 myheight p-0 d-flex justify-content-between align-items-center flex-column bgright">
            <div class="null"></div>
            <div class="loginContainer">
                <div class="row d-flex justify-content-center">
                    <div class="col-5 d-flex justify-content-end align-items-center">
                        <div class="logo"></div>
                    </div>
                    <span class="text-light col-7 fs-2 d-flex justify-content-start align-items-center" style="font-family: Playwrite BE VLG, cursive;">shoeOwn</span>
                </div>
                <div class="row">
                    <div class="col-4 fs-3 text-light text-end"><i class="fa-brands fa-facebook"></i></div>
                    <div class="col-4 fs-3 text-light text-center"><i class="fa-brands fa-google"></i></div>
                    <div class="col-4 fs-3 text-light text-start"><i class="fa-brands fa-linkedin-in"></i></div>
                </div>
                <div class="row">
                    <div class="col-12 text-light  text-center" style="font-size: 11px;">或使用您的電子郵件傳送帳戶</div>
                </div>
                <div class="row">
                    <form class="p-0 myform" required="required">
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="name@example.com" required>
                        <label for="inputPassword5" class="form-label"></label>
                        <input type="password" id="inputPassword5" class="form-control mb-1" placeholder="密碼" aria-describedby="passwordHelpBlock" autocomplete="off" required>
                        <div class="row">
                            <a class="col-12  text-end">忘記密碼</a>
                        </div>
                        <div class="row">
                            <button type="submit" class="btn btn-primary rounded-pill">登入</button>
                        </div>  
                    </form>
                </div>
            </div>
            <div class="null d-md-flex d-none"></div>  
            <div class="row d-md-none d-flex">
                <div class="col-4 fs-3 text-light text-end"><i class="fa-brands fa-x-twitter"></i></div>
                <div class="col-4 fs-3 text-light text-center"><i class="fa-brands fa-facebook"></i></div>
                <div class="col-4 fs-3 text-light text-start"><i class="fa-brands fa-instagram"></i></div>
            </div> 
        </div>
    </div>
  </div>
</template>

<style>

</style>
