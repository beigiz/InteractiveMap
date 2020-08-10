<template>
  <div class="form">
    <h1></h1>

    <div class="dynamic-inputs-container">
      <h4>{{form.title}}</h4>
      <div class="columns" v-for="subform in form.subform" :key="subform.id">
        <div class="column">
          <h5>{{subform.title}}</h5>
          <p>{{subform.description}}</p>
          <div class="column">
            <div class v-for="elm in subform.elements" :key="elm.id">
              <b-field horizontal :label="elm.title">
                <b-input name="name" placeholder="Name" expanded></b-input>
                <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
              </b-field>
              <b-field
                :label="inp.label"
                :type="{'is-danger': errors[inp.name]}"
                :message="(errors[inp.name]) ? errors[inp.name][0] : ''"
              >
                <b-input v-model="inp.value" v-if="inp.type == 'input'"></b-input>
                <b-select
                  v-if="inp.type == 'select'"
                  v-model="inp.value"
                  :placeholder="inp.placeholder"
                  expanded
                >
                  <option
                    v-for="opt in inp.options"
                    :value="opt.value"
                    :key="opt.value"
                  >{{ opt.name }}</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      errors: {},
      form: {
        title: "لطفا به سوالات زیر با دقت پاسخ دهید",
        subform: [
          {
            id: 1,
            title: "",
            description: "",
            elements: [
              {
                id: 1,
                title: "",
                inputs: [
                  {
                    id: 1,
                    type: "input",
                    label: "نام",
                    placeholder: "",
                    name: "name"
                  },
                  {
                    id: 2,
                    type: "select",
                    label: "نام خانوادگی",
                    placeholder: "",
                    options: [
                      {
                        value: "0",
                        name: "تایید شده"
                      },
                      {
                        value: "1",
                        name: "در حال بررسی"
                      },
                      {
                        value: "2",
                        name: "رد شده"
                      }
                    ],
                    name: "insurance"
                  }
                ]
              }
            ]
          }
        ]
      },
      status_choices: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
