const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs/tabs'
import TabsHeader from '../src/Tabs/tabs-head'
import TabsBody from '../src/Tabs/tabs-body'
import TabsItem from '../src/Tabs/tabs-item'
import TabsPane from '../src/Tabs/tabs-pane'
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHeader)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接受 selected prop', (done) => {
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <z-tabs selected="finance">
            <z-tabs-head>
                <z-tabs-item name="woman">美女</z-tabs-item>
                <z-tabs-item name="finance">财经</z-tabs-item>
                <z-tabs-item name="sports">体育</z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
                <z-tabs-pane name="woman">美女相关资讯</z-tabs-pane>
                <z-tabs-pane name="finance">财经相关资讯</z-tabs-pane>
                <z-tabs-pane name="sports">体育相关资讯</z-tabs-pane>
            </z-tabs-body>
        </z-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')

            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

    it('接受 direction prop', () => {

    })
})