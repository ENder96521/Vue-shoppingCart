<script>
    import itemCount from '@/components/itemCount.vue';
    import { useShoppingCartStore } from '@/stores/cart'
    export default {
        setup() {
            const shoppingCartStore = useShoppingCartStore();
            return { shoppingCartStore }
        },
        components: {
            itemCount,
        },


        mounted() {
            console.log(this.shoppingCartStore.cart);
        },

        data() {
            return {
                data: [
                    {itemCount1: 1, itemCount2: 1, itemCont3: 1, price1: 0, price2: 0, price3: 0, fee: 60, littleTotal: 0, items: 0, payment:'', deliver: '', name: '', phone: '', email: '', address: '', city: '', zip: 0},

                ],
            } 
        },

        computed: {
            price1() {
                this.data[0].price1 = this.data[0].itemCount1 * 200;
                return (this.data[0].itemCount1 * 200);
            },
            price2() {
                this.data[0].price2 = this.data[0].itemCount2 * 300;
                return (this.data[0].itemCount2 * 300);
            },
            price3() {
                this.data[0].price3 = this.data[0].itemCount3 * 400;
                return (this.data[0].itemCount3 * 400);
            },

            littleTotal() {
                this.data[0].littleTotal = (this.price1 + this.price2 + this.price3);
                return (this.price1 + this.price2 + this.price3);
            },

            items() {
                this.data[0].items = this.data[0].itemCount1 + this.data[0].itemCount2 + this.data[0].itemCount3;
                return this.data[0].itemCount1 + this.data[0].itemCount2 + this.data[0].itemCount3;
            }
        },

        methods: {
            nextPage() {
                sessionStorage.setItem('data', JSON.stringify(this.data));
                location.href="/shop2"
            }
        }
    }
</script>

<template>
    <main class="container-fluid p-0">
        <div class="bg-light myheight d-flex justify-content-center align-items-center p-sm-0 px-5 ">
            <div class="bg-light p-5 shadow-lg container-md" style="height: 90%;  margin: 50px 0px;">
                <h3 class="mb-5">購物車</h3>
                <div class="row position-relative d-flex justify-content-center align-items-center">
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="bg-dark mycircle text-light  text-center mb-1 myitem">1</div>
                        <p class="text-nowrap myfont">確認購物車</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="progress p-0  position-absolute mywidth-1" role="progressbar" style="top:16%; left: 21%; height: 10%; width: 8%;">
                            <div class="progress-bar" style="width: 25%"></div>
                        </div>
                        <div class="bg-body border mycircle text-dark  text-center mb-1 myitem">2</div>
                        <p class="text-nowrap myfont">付款與運送方式</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="progress p-0 position-absolute mywidth-2" role="progressbar" style="top:16%; left: 46%; height: 10%; width: 8%;">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        <div class="bg-body border mycircle text-dark  text-center mb-1 myitem">3</div>
                        <p class="text-nowrap myfont">填寫資料</p>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center flex-column">
                        <div class="progress p-0  position-absolute mywidth-3" role="progressbar" style="top:16%; left: 71%; height: 10%;  width: 8%;">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                        <div class="bg-body border mycircle text-dark  text-center mb-1 myitem">4</div>
                        <p class="text-nowrap myfont">完成訂購</p>
                    </div>
                </div>
                <hr>
                <h5 class="mb-5">訂單明細</h5>
                <div class="row">
                    <div class="col-12 d-flex align-items-center flex-wrap">
                        <div class="d-flex justify-content-center align-items-center col-sm-1 col-6 ">
                            <img class="mycircle border border-dark" src="../assets/img/skin/02.webp" alt="" style="width: 50px; height: 50px;">
                        </div>
                        <div class="p-2 col-sm-7 col-6">
                            <h5>Air Jordan 1 - Travis Scott</h5>
                            <p class="m-0">#340554</p>
                        </div>
                        <div class="d-flex justify-content-end col-sm-3 col-6">
                            <itemCount @count="(count) => data[0].itemCount1 = count"/>
                        </div>
                        <div class="col-sm-1 col-6">$<span class="countMoney">{{ price1 }}</span></div>
                    </div>
                    <hr>
                    <div class="col-12 d-flex align-items-center flex-wrap">
                        <div class="d-flex justify-content-center align-items-center col-sm-1 col-6">
                            <img class="mycircle border border-dark" src="../assets/img/skin/01.webp" alt="" style="width: 50px; height: 50px;">
                        </div>
                        <div class="p-2 col-sm-7 col-6">
                            <h5>Air Jordan 1 - Chicago</h5>
                            <p class="m-0">#204035</p>
                        </div>
                        <div class="d-flex justify-content-end col-sm-3 col-6">
                            <itemCount @count="(count) => data[0].itemCount2 = count"/>
                        </div>
                        <div class="col-sm-1 col-6">$<span class="countMoney">{{ price2 }}</span></div>
                    </div>
                    <hr>
                    <div class="col-12 d-flex align-items-center flex-wrap">
                        <div class="d-flex justify-content-center align-items-center col-sm-1 col-6 ">
                            <img class="mycircle border border-dark" src="../assets/img/skin/03.webp" alt="" style="width: 50px; height: 50px;">
                        </div>
                        <div class="p-2 col-sm-7 col-6">
                            <h5>Nike vaporwaffle-Sacai</h5>
                            <p class="m-0">#883845</p>
                        </div>
                        <div class="d-flex justify-content-end col-sm-3 col-6">
                            <itemCount @count="(count) => data[0].itemCount3 = count"/>
                        </div>
                        <div class="col-sm-1 col-6">$<span class="countMoney">{{ price3 }}</span></div>
                    </div>
                    <hr class="mb-4">
                    <div class="row justify-content-end">
                        <div class="col-sm-4  col-6 mb-3">
                            <div class="d-flex justify-content-between align-items-center ">
                                <span>數量:</span>
                                <span class=" items">{{ items }}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>小計:</span>
                                <span class=" allItemPrice">${{ littleTotal }}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>手續費:</span>
                                <span class=" fee" >${{ data[0].fee }}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>總計:</span>
                                <span class=" totalPrice">${{ littleTotal +  data[0].fee }}</span>
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="row">
                        <div class="col-sm-6 col-12 d-flex justify-content-sm-start justify-content-center mb-sm-0 mb-2">
                            <a class="icon-link icon-link-hover text-dark text-decoration-none" href="#" style="--bs-icon-link-transform: translate3d(-.125rem, 0, 0);">
                                <i class="bi bi-arrow-left mb-2"></i>
                                返回購物
                              </a>
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