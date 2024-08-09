<script>
    export default {
        data() {
            return {
                data: JSON.parse(sessionStorage.getItem('data')),
            }
        },

        methods: {
            inputName(e) {
                this.data[0].name = e.target.value
            },

            inputEmail(e) {
                this.data[0].email = e.target.value
            },

            inputPhone(e) {
                this.data[0].phone = e.target.value
            },

            inputAddress(e) {
                this.data[0].address = e.target.value
            },

            inputZip(e) {
                this.data[0].zip = e.target.value
            },

            inputCity(e) {
                this.data[0].city = e.target.value
            },
            nextPage() {
                if (this.data[0].name === '' || this.data[0].email === '' || this.data[0].phone === '' || this.data[0].address === '' || this.data[0].zip === 0 || this.data[0].city === '') {
                    alert('請輸入完整資料');
                    return
                } else {
                    sessionStorage.setItem('data', JSON.stringify(this.data));
                    location.href="/shop4"
                }
            }
        }
    }
</script>

<template>
    <main class="container-fluid p-0">
        <div class="bg-light myheight d-flex justify-content-center align-items-center p-sm-0 px-5 ">
            <div class="bg-light p-5 shadow-lg container-md" style="height: 90%;  margin: 50px 0px;">
                <h3 class="mb-5">購物車</h3>
                <div class="row position-relative d-flex justify-content-center ">
                    <div class="progress p-0  position-absolute mywidth-1" role="progressbar" style="top:16%; left: 21%; height: 10%; width:8%;">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                    <div class="progress p-0 position-absolute mywidth-2" role="progressbar" style="top:16%; left: 46%; height: 10%; width:8%;">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                    <div class="progress p-0  position-absolute mywidth-3" role="progressbar" style="top:16%; left: 71%; height: 10%;  width:8%;">
                        <div class="progress-bar" style="width: 25%"></div>
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
                        <div class="bg-dark border mycircle text-light fs-4 text-center mb-1" style="width: 40px; height: 40px;">3</div>
                        <p class="text-nowrap myfont">填寫資料</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-body border mycircle text-dark fs-4 text-center mb-1" style="width: 40px; height: 40px;">4</div>
                        <p class="text-nowrap myfont">完成訂購</p>
                    </div>
                </div>
                <hr>
                <h5 class="mb-3">寄送資料</h5>
                <div class="row">
                    <div class="col-12 align-items-center">
                        <div class="mb-1">姓名</div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="王小明" @input="inputName">
                        </div>
                        <div class="mb-1">電話</div>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" name="phone" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="0912345678" @input="inputPhone">
                        </div>
                        <div class="mb-1">Email</div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" name="email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="example@gmail.com" @input="inputEmail">
                        </div>
                        <div class="mb-1">地址</div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control me-2" name="city" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="城市" @input="inputCity">
                            <input type="number" class="form-control" name="zip" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="郵遞區號" @input="inputZip">
                        </div>
                        <div class="input-group mb-5">
                            <input type="text" class="form-control" name="address" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="地址" @input="inputAddress">
                        </div>
                    </div>
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
                        <div class="col-sm-6 col-12 d-flex justify-content-sm-start justify-content-center">
                            <a href="shop2"><button type="button" class="btn btn-light text-primary border-primary mb-sm-0 mb-1">上一步</button></a> 
                        </div>
                        <div class="col-sm-6 col-12 d-flex justify-content-sm-end justify-content-center">
                            <button type="button" class="btn btn-primary" @click="nextPage">前往付款</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>