<script>
    export default {
        
        data() {
            return {
                data: JSON.parse(sessionStorage.getItem('data')),
            }
        },
        

        methods: {
            paymentChoose(e) {
                this.data[0].payment = e.target.value
            },

            deliverChoose(e) {
                this.data[0].deliver = e.target.value
            },
            
            nextPage() {
                if (this.data[0].payment === '' || this.data[0].deliver === '') {
                    alert('請選擇運送方式與付款方式');
                    return
                } else {
                    sessionStorage.setItem('data', JSON.stringify(this.data));
                    location.href="/shop3"
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
                    <div class="progress p-0  position-absolute mywidth-1" role="progressbar" style="top:16%; left: 21%; height: 10%; width: 8%;">
                        <div class="progress-bar" style="width: 100%"></div>
                    </div>
                    <div class="progress p-0 position-absolute mywidth-2" role="progressbar" style="top:16%; left: 46%; height: 10%; width: 8%;">
                        <div class="progress-bar" style="width: 25%"></div>
                    </div>
                    <div class="progress p-0  position-absolute mywidth-3" role="progressbar" style="top:16%; left: 71%; height: 10%;  width: 8%;">
                        <div class="progress-bar" style="width: 0%"></div>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-body mycircle text-dark border fs-4 text-center mb-1" style="width: 40px; height: 40px;">1</div>
                        <p class="text-nowrap myfont">確認購物車</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-dark border mycircle text-light fs-4 text-center mb-1" style="width: 40px; height: 40px;">2</div>
                        <p class="text-nowrap myfont">付款與運送方式</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-body border mycircle text-dark fs-4 text-center mb-1" style="width: 40px; height: 40px;">3</div>
                        <p class="text-nowrap myfont">填寫資料</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-body border mycircle text-dark fs-4 text-center mb-1" style="width: 40px; height: 40px;">4</div>
                        <p class="text-nowrap myfont">完成訂購</p>
                    </div>
                </div>
                <hr>
                <h5 class="mb-3">付款方式</h5>
                <div class="row">
                    <div class="col-12 align-items-center">
                        <div class="form-check mb-4 ms-3">
                            <input class="form-check-input" type="radio" name="flexRadio" id="flexRadio1" value="信用卡付款" @change="paymentChoose">
                            <label class="form-check-label" for="flexRadio1">
                              信用卡付款
                            </label>
                        </div>
                        <hr class="ms-3">
                        <div class="form-check mb-4 ms-3">
                            <input class="form-check-input" type="radio" name="flexRadio" value="網路ATM" id="flexRadio2" @change="paymentChoose">
                            <label class="form-check-label" for="flexRadio2">
                              網路ATM
                            </label>
                        </div>
                        <hr class="ms-3">
                        <div class="form-check mb-4 ms-3">
                            <input class="form-check-input" type="radio" name="flexRadio" value="超商代碼" id="flexRadio3" @change="paymentChoose">
                            <label class="form-check-label" for="flexRadio3">
                              超商代碼
                            </label>
                        </div>
                        <hr>
                        <h5 class="mb-3">運送方式</h5>
                        <div class="form-check mb-4 ms-3">
                            <input class="form-check-input" type="radio" name="deliver" value="黑貓宅配" id="flexRadioDefault1" @change="deliverChoose">
                            <label class="form-check-label" for="flexRadioDefault1">
                              黑貓宅配
                            </label>
                        </div>
                        <hr class="ms-3">
                        <div class="form-check mb-4 ms-3">
                            <input class="form-check-input" type="radio" name="deliver" id="flexRadioDefault2" value="超商店到店" @change="deliverChoose">
                            <label class="form-check-label" for="flexRadioDefault2">
                              超商店到店
                            </label>
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
                            <a href="shop1"><button type="button" class="btn btn-light text-primary border-primary mb-sm-0 mb-1">上一步</button></a> 
                        </div>
                        <div class="col-sm-6 col-12 d-flex justify-content-sm-end justify-content-center">
                            <button type="button" class="btn btn-primary" @click="nextPage">下一步</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style></style>