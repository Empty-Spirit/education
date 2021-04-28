<template>
    <div>
        <div v-show="header"><Header></Header></div>
        <div class="studentsCard">
            <div class="header">
                <Row :wrap="false">
                    <Col flex="auto"><span class="title">{{title}}</span></Col>
                    <Col flex="none">
                        <div style="padding: 0 16px" @click="handleRouter">
                            全部
                            <Icon type="ios-arrow-forward" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div class="content">
                <List border>
                    <ListItem v-for="item in list" :key="item.id">
                        <div style="flex: 1">
                            <Row :wrap="false">
                                <Col flex="auto"><strong class="desc">{{item.name}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{item.name}}</strong></Col>
                                <Col flex="none">
                                    <div class="time">
                                        2020
                                    </div>
                                </Col>
                            </Row>
                            <Row :wrap="false">
                                <Col flex="auto">{{item.name}} </Col>
                                <Col flex="none">
                                    <div class="time">
                                        2020-5
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </ListItem>
                </List>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header'
export default {
    name: 'StudentCard',
    components: { Header },
    props: {
        title: String
    },
    data() {
        return {
            list: [
                {id: 1, name: '全部', status: '全部'},
                {id: 2, name: '11', status: 'aa'},
                {id: 3, name: '全部', status: '12313'},
                {id: 4, name: 'aaa', status: '全部'},
                {id: 5, name: '11', status: '12313'}
            ],
            header: false
        }
    },
    methods: {
        handleRouter(){
            // this.$router.push({
            //     name: ''
            // })
            // this.header = true
        }
    }
}
</script>
<style scoped>
.studentsCard{
    margin: .1rem 0;
}
.header .ivu-row .ivu-col{
    line-height: 50px;
    text-align: center;
}
.header .title{
    display: inline-block;
    margin-left: 80px;
}
.content .ivu-col{
    text-align: left;
}
.content .desc{
    color: #f90;
}
.content .time {
    padding: 0 16px;
    font-size: 14px;
}
</style>