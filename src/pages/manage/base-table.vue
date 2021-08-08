<template>
  <div class="base-table">
    <a-table 
      :columns="columns" 
      :data-source="data" 
      :scroll="{ x: 1000 }"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="nameTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="date" slot-scope="date">
        {{formatDate(date)}}
      </span>
      <a-button type="link" slot="action" slot-scope="record" @click="handleDetail(record)">详情</a-button>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'base-table',

  data () {
    return {
      columns: [],
      data: [],
      loading: false,
      pagination: {}
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.init() // 初始化表格列格式
    this.getData() // 获取表格数据
  },

  methods: {
    // 点击页码
    handleTableChange (page) {
      this.getData(page.current)
    },
    // 初始化表格列格式
    init() {
      this.columns = [
        { 
          width: 100, 
          dataIndex: 'name', 
          key: 'name', 
          fixed: 'left',
          slots: { title: 'nameTitle' },
          scopedSlots: { customRender: 'name' },
        },
        { 
          title: 'Age', 
          width: 100, 
          dataIndex: 'age', 
          key: 'age', 
          fixed: 'left',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age, 
          sortDirections: ['descend', 'ascend'],
        },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { 
          title: 'Tags',
          dataIndex: 'tags',
          key: 'tags',
          scopedSlots: { customRender: 'tags' },
        },
        { 
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          scopedSlots: { customRender: 'date' },
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          scopedSlots: { customRender: 'action' },
        },
      ]
      this.pagination = {
        pageSize: 2,
        total: 8,
        defaultCurrent: 1
      }
    },

    // 获取表格数据
    getData(page = 1) {
      this.loading = true
      let data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          date: new Date(),
          address: 'New York Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 40,
          date: new Date(),
          address: 'London Park',
          tags: ['nice', 'teacher'],
        },
        {
          key: '3',
          name: 'Joke Brown',
          age: 32,
          date: new Date(),
          address: 'New York Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '4',
          name: 'Lucy Green',
          age: 40,
          date: new Date(),
          address: 'London Park',
          tags: ['nice', 'teacher'],
        },
        {
          key: '5',
          name: 'Tom Brown',
          age: 32,
          date: new Date(),
          address: 'New York Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '6',
          name: 'Jimi Green',
          age: 40,
          date: new Date(),
          address: 'London Park',
          tags: ['nice', 'teacher'],
        },
        {
          key: '7',
          name: 'Make Brown',
          age: 32,
          date: new Date(),
          address: 'New York Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '8',
          name: 'Orange Green',
          age: 40,
          date: new Date(),
          address: 'London Park',
          tags: ['nice', 'teacher'],
        },
      ]
      setTimeout(() => {
        let result = data.slice((page - 1) * 2, page * 2)
        this.data = result
        this.loading = false
      }, 1500)
    },

    // 格式化时间
    formatDate(date) {
      console.log(date)
      return '2021-08-08  19:49:36'
    },

    // 查看详情
    handleDetail(record) {
      console.log(record)
    }
  }
}
</script>

<style lang='less'>

</style>
