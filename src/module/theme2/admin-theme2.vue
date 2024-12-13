<template>
  <div style="display: grid;grid-template-columns: 260px 1fr;
  background-color: #F6F8FA;height: 100vh;">
    <div style="margin: 0 15px;">
      <div style="height: 60px;display: flex;align-items: center;font-weight: bolder;font-size: 16px;">
        <el-avatar :size="36" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        项目图标和模块名称
      </div>

      <nav style="height: calc(100vh - 60px);">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </nav>
    </div>
    <div>
      <header style="height: 60px;display: flex;grid-gap: 20px;align-items: center;margin-right: 15px;">
        <div>
          <el-icon :size="20">
            <Expand />
          </el-icon>
        </div>

        <div style="font-weight: bolder;">菜单管理</div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>资源管理</el-breadcrumb-item>
        </el-breadcrumb>

        <div style="flex: 1"></div>

        <el-avatar :size="36" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        <div>admin</div>
        <div>
          <el-icon :size="20">
            <ArrowDown />
          </el-icon>
        </div>

        <div>
          <el-icon :size="20">
            <House />
          </el-icon>
        </div>

        <div>
          <el-icon :size="20">
            <Search />
          </el-icon>
        </div>

        <div>
          <el-icon :size="20">
            <Sunny />
          </el-icon>
        </div>

        <div>
          <el-icon :size="20">
            <Message />
          </el-icon>
        </div>
      </header>
      <main style="background-color: #ffffff;height: calc(100vh - 75px);
      border: 1px solid #D1D9E0;
      width: calc(100vw - 275px); border-radius: 12px;">

        <div style="border-bottom: 1px solid #EBEEF5;padding: 10px;">
          <el-button type="primary" :icon="Plus">新增</el-button>
          <el-select
              placeholder="历史查询条件"
              style="width: 280px;margin-left: 15px;"
          >
          </el-select>
        </div>

        <div  style="border-bottom: 1px solid #EBEEF5;padding: 20px 20px 5px 20px;">
          <el-form :model="form" label-width="auto">
            <div style="display: grid;grid-template-columns: 300px 360px 1fr">
              <el-form-item label="Activity name">
                <el-input v-model="form.name" />
              </el-form-item>
              <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="Activity time">
                <el-col :span="11">
                  <el-date-picker
                      v-model="form.date1"
                      type="date"
                      placeholder="Pick a date"
                      style="width: 100%"
                  />
                </el-col>
                <el-col :span="1" class="text-center">
                  <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                  <el-time-picker
                      v-model="form.date2"
                      placeholder="Pick a time"
                      style="width: 100%"
                  />
                </el-col>
              </el-form-item>
            </div>

            <div style="display: grid;grid-template-columns:  300px 360px 1fr">
              <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
              </el-form-item>

              <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                  <el-radio value="Sponsor">Sponsor</el-radio>
                  <el-radio value="Venue">Venue</el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox value="Online activities" name="type">
                    Online activities
                  </el-checkbox>
                  <el-checkbox value="Promotion activities" name="type">
                    Promotion activities
                  </el-checkbox>
                  <el-checkbox value="Offline activities" name="type">
                    Offline activities
                  </el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>

          </el-form>
        </div>

        <div style="display: flex;margin-top: 15px;justify-content: center;">
          <el-button type="success" @click="onSubmit" :icon="Search">查询</el-button>
          <el-button>更多条件</el-button>
          <el-button>保存查询条件</el-button>
          <el-button>导出Excel</el-button>
          <el-button>表格列配置</el-button>
        </div>

        <div style="margin: 15px;box-shadow: 0 1px 1px -1px #dddddd;">
          <el-table :data="tableData" border stripe>
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </div>

        <div style="display: flex;height: 40px;align-items: center;margin-left: 15px;">
          <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="1000" />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {Expand, House, Plus, Search, ArrowDown, Sunny, Message, Setting, Document, Location} from '@element-plus/icons-vue'

export default defineComponent({
  name: 'admin-theme2',
  components: {
    Expand,
    House,
    Plus,
    Search,
    ArrowDown,
    Sunny,
    Message,
    Setting,
    Document,
    Location,
  },
  setup(props, ctx) {
    const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    })

    const onSubmit = () => {
      console.log('submit!')
    }

    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    return {
      Plus,
      Search,
      form,
      onSubmit,
      tableData,
    }
  },
})
</script>

<style scoped>

</style>