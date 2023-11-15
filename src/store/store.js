// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      courses: [],
      lessons: []
   },

   mutations: {
      SET_COURSES(state, courses) {
         state.courses = courses;
      },
      SET_LESSONS(state, items) {
         state.lessons = items;
      },
   },

   actions: {
      fetch({ commit }) {
         let x = setTimeout(() => {
            const courses = [
               { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida sodales. Vivamus ac elit vitae lacus tempus volutpat. Morbi id mi feugiat, blandit purus bibendum, finibus nibh. Phasellus convallis euismod sapien, ac ultricies tellus mollis eu. Proin ac convallis justo. Sed lobortis mollis nunc, id vehicula dolor cursus a. Aliquam' },
               { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida sodales. Vivamus ac elit vitae lacus tempus volutpat. Morbi id mi feugiat, blandit purus bibendum, finibus nibh. Phasellus convallis euismod sapien, ac ultricies tellus mollis eu. Proin ac convallis justo. Sed lobortis mollis nunc, id vehicula dolor cursus a. Aliquam' },
               { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis gravida sodales. Vivamus ac elit vitae lacus tempus volutpat. Morbi id mi feugiat, blandit purus bibendum, finibus nibh. Phasellus convallis euismod sapien, ac ultricies tellus mollis eu. Proin ac convallis justo. Sed lobortis mollis nunc, id vehicula dolor cursus a. Aliquam' },
            ];
            clearTimeout(x)
            commit('SET_COURSES', courses);
         }, Math.ceil(Math.random() * 1000));
      },
      fetchLessons({ commit }, id) {
         let x = setTimeout(() => {
            const lessons = [{
               id: id,
               title: `Sample Article Title ${id}`,
               content: `  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus vel nunc ultrices ultricies vel ac nisi. Aliquam non eleifend justo. Vivamus ut quam eu mi tincidunt rhoncus vel nec velit. Ut euismod varius urna, in feugiat nulla tincidunt a. Phasellus quis metus et est fermentum ullamcorper. Sed at ante id felis condimentum varius ut eu urna. Praesent vel feugiat justo, vel venenatis turpis. Sed commodo nisl vel ante malesuada, ut sagittis orci interdum.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>`
            }, {
               id: id + 1,
               title: `Sample Article Title ${id + 1}`,
               content: `  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus vel nunc ultrices ultricies vel ac nisi. Aliquam non eleifend justo. Vivamus ut quam eu mi tincidunt rhoncus vel nec velit. Ut euismod varius urna, in feugiat nulla tincidunt a. Phasellus quis metus et est fermentum ullamcorper. Sed at ante id felis condimentum varius ut eu urna. Praesent vel feugiat justo, vel venenatis turpis. Sed commodo nisl vel ante malesuada, ut sagittis orci interdum.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>`

            }, {
               id: id + 2,
               title: `Sample Article Title ${id + 2}`,
               content: `  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus vel nunc ultrices ultricies vel ac nisi. Aliquam non eleifend justo. Vivamus ut quam eu mi tincidunt rhoncus vel nec velit. Ut euismod varius urna, in feugiat nulla tincidunt a. Phasellus quis metus et est fermentum ullamcorper. Sed at ante id felis condimentum varius ut eu urna. Praesent vel feugiat justo, vel venenatis turpis. Sed commodo nisl vel ante malesuada, ut sagittis orci interdum.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>
               <p>Donec vel justo vel libero posuere gravida. Vivamus in bibendum ligula, vitae aliquam lectus. Nam euismod orci et felis laoreet, in tincidunt elit hendrerit. Vestibulum facilisis justo nec velit imperdiet, vel laoreet nisl feugiat. Proin in orci eu metus ullamcorper scelerisque. Maecenas vel nisl non justo pharetra consectetur. Fusce vulputate consectetur lacus, vitae gravida mi malesuada in.</p>`
            }];
            clearTimeout(x)
            commit('SET_LESSONS', lessons);
         }, Math.ceil(Math.random() * 1000));
      },
   },
});
