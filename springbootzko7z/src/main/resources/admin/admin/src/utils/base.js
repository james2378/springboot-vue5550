const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootzko7z/",
            name: "springbootzko7z",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootzko7z/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "广场舞团"
        } 
    }
}
export default base
