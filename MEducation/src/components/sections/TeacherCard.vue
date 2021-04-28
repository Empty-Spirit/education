<template>
    <div class="studentsCard">
        <div class="header">
            <Row :wrap="false">
                <Col flex="auto"><span class="title">热门学员</span></Col>
                <Col flex="none">
                    <div style="padding: 0 16px">
                        全部
                        <Icon type="ios-arrow-forward" />
                    </div>
                </Col>
            </Row>
        </div>
        <div class="content">
            <Card :dis-hover="true" v-for="item in studentsList" :key="item.id">
                <Row>
                    <Col span="6">
                        <img :src="item.img" class="student-img" />
                    </Col>
                    <Col span="18">
                        <Row :wrap="false">
                            <Col flex="auto">
                                <strong>{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;<span class="desc">{{item.des}}</span></strong>
                            </Col>
                            <Col flex="none">
                                <div class="time">
                                    2020-4
                                </div>
                            </Col>
                        </Row>
                        
                        <div>{{item.school}}&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.school}}</span></div>
                        <div>学习科目：<span>{{item.school}}</span></div>
                        <div>{{item.school}}</div>
                    </Col>
                </Row>
            </Card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TeacherCard',
    data() {
        return {
            studentsList: [
                {name: '学习科目', school: 'sc', des: '学习科目', id: 1, img: 'https://guanli.jiajiao114.com/admin/img/banner.png'},
                {name: 'zhang', school: 'sc', des: '学习科目', id: 2, img: 'https://guanli.jiajiao114.com/admin/img/banner.png'},
                {name: 'zhang', school: 'sc', des: 'ee', id: 3, img: 'https://guanli.jiajiao114.com/admin/img/banner.png'},
                {name: 'zhang', school: 'sc', des: 'ee', id: 4, img: 'https://guanli.jiajiao114.com/admin/img/banner.png'}
            ]
        }
    },
    methods: {
    }
}
</script>
<style scoped>
.studentsCard{
    margin: .1rem 0;
}
.header .ivu-col{
    line-height: 50px;
}
.header .title{
    display: inline-block;
    margin-left: 80px;
}
.content .ivu-card{
    height: 162px;
}
.content .student-img{
    width: 100%;
}
.content .ivu-col-span-18{
    text-align: left;
    padding-left: 20px;
}
.content .desc{
    font-size: 14px;
    color: #f90;
}
.content .time {
    padding: 0 16px;
    font-size: 14px;
}
</style>