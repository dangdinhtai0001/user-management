<template>
  <div>
    <div class="flex justify-center ...">
      <div class="demo-type">
        <el-avatar :size="150" src="https://empty" @error="errorHandler">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-profile",
};
</script>