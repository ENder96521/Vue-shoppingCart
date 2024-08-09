<script>
    export default {
        data() {
            return {
                data: JSON.parse(sessionStorage.getItem('data'))
            }
        }
    }
</script>

<template>
    <main class="container-fluid p-0">
        <div class="bg-light myheight d-flex justify-content-center align-items-center p-sm-0 px-5 ">
            <div class="bg-light p-5 shadow-lg container-md" style="height: 90%; margin: 50px 0px;">
                <h3 class="mb-5">購物車</h3>
                <div class="row position-relative d-flex justify-content-center ">
                    <div class="progress p-0  position-absolute mywidth-1" role="progressbar" style="top:16%; left: 21%; height: 10%; width: 8%;">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                    <div class="progress p-0 position-absolute mywidth-2" role="progressbar" style="top:16%; left: 46%; height: 10%; width: 8%;">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                    <div class="progress p-0  position-absolute mywidth-3" role="progressbar" style="top:16%; left: 71%; height: 10%;  width: 8%;">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-body mycircle text-dark border fs-4 text-center mb-1" style="width: 40px; height: 40px;">1</div>
                        <p class="text-nowrap myfont">確認購物車</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-body border mycircle text-dark fs-4 text-center mb-1" style="width: 40px; height: 40px;">2</div>
                        <p class="text-nowrap myfont">付款與運送方式</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-body border mycircle text-dark fs-4 text-center mb-1" style="width: 40px; height: 40px;">3</div>
                        <p class="text-nowrap myfont">填寫資料</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-dark border mycircle text-light fs-4 text-center mb-1" style="width: 40px; height: 40px;">4</div>
                        <p class="text-nowrap myfont">完成訂購</p>
                    </div>
                </div>
                <hr>
                <h3 class="mb-3 text-center">訂單成立</h3>
                <h5 class="mb-3">訂單明細</h5>
                <div class="row">
                    <div class="col-12 d-flex align-items-center">
                        <div class="d-flex justify-content-center align-items-center col-1 me-2">
                            <img class="mycircle border border-dark" src="../assets/img/skin/02.webp" alt="" style="width: 50px; height: 50px;">
                        </div>
                        <div class="p-2 col-7">
                            <h5>Air Jordan 1 - Travis Scott</h5>
                            <p class="m-0">#340554</p>
                        </div>
                        <div class="d-flex justify-content-center col-3">
                            <span>x{{ this.data[0].itemCount1 }}</span>
                        </div>
                        <div class="col-1">${{ this.data[0].price1 }}</div>
                    </div>
                    <hr>
                    <div class="col-12 d-flex align-items-center">
                        <div class="d-flex justify-content-center align-items-center col-1 me-2">
                            <img class="mycircle border border-dark" src="../assets/img/skin/01.webp" alt="" style="width: 50px; height: 50px;">
                        </div>
                        <div class="p-2 col-7">
                            <h5>Air Jordan 1 - Chicago</h5>
                            <p class="m-0">#204035</p>
                        </div>
                        <div class="d-flex justify-content-center col-3">
                            <span>x{{ this.data[0].itemCount2 }}</span>
                        </div>
                        <div class="col-1">${{ this.data[0].price2 }}</div>
                    </div>
                    <hr>
                    <div class="col-12 d-flex align-items-center">
                        <div class="d-flex justify-content-center align-items-center col-1 me-2">
                            <img class="mycircle border border-dark" src="../assets/img/skin/03.webp" alt="" style="width: 50px; height: 50px;">
                        </div>
                        <div class="p-2 col-7">
                            <h5>Nike vaporwaffle-Sacai</h5>
                            <p class="m-0">#883845</p>
                        </div>
                        <div class="d-flex justify-content-center col-3">
                            <span>x{{ this.data[0].itemCount3 }}</span>
                        </div>
                        <div class="col-1">${{ this.data[0].price3 }}</div>
                    </div>
                    <hr class="mb-3">
                    <h5 class="mb-3">寄送資料</h5>
                    <div class="mb-4">姓名: {{ this.data[0].name }}</div>
                    <div class="mb-4">電話: {{ this.data[0].phone }}</div>
                    <div class="mb-4"> Email: {{ this.data[0].email }}</div>
                    <div class="mb-4">地址: {{ this.data[0].city }}{{ this.data[0].address }}</div>                
                    <hr class="mb-4">
                    <div class="row justify-content-end">
                        <div class="col-4 mb-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>數量:</span>
                                <span class="fs-5">{{ data[0].items }}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>小計:</span>
                                <span class="fs-5" >${{ data[0].littleTotal }}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>手續費:</span>
                                <span class="fs-5" @fee="">${{ data[0].fee }}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>總計:</span>
                                <span class="fs-5">${{ data[0].littleTotal + data[0].fee }}</span>
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-sm-end justify-content-center">
                            <a href="/"><button type="button" class="btn btn-primary">返回首頁</button></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>