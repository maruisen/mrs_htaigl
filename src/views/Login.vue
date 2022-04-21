<template>
    <div class="da">
        <div class="x">
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item
        
                    prop="name"
                >
                    <el-input v-model="ruleForm.name" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item
                    prop="name"
                >
                    <el-input v-model="ruleForm.name" placeholder="密码"></el-input>
                </el-form-item>
<el-button type="primary" class="btn">登录</el-button>
            </el-form>
            
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {},
      rules: {}
    };
  },
  methods: {},
  components: {},
  computed: {},
  watch: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.da {
  width: 100%;
  height: 100%;
  .x {
    margin: 0px auto;
    .demo-ruleForm{
        width: 60%;
        margin: 0px auto;
    }
    .btn{
        // width: 100px;
        margin: 0px 300px;
    }
  }
}
</style>