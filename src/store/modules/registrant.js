import graphqlClient from '@/shared/apollo';
import registrantQueries from '@/helpers/queries/registrants';

export default {
  namespaced: true,
  state: {
    registrants: {
      list: [],
      isLoading: false
    }
  },
  getters: {
    registrants(state) {
      return state.registrants;
    }
  },
  mutations: {
    updateRegistrants(state, { isLoading, list }) {
      state.registrants.list = list;
      state.registrants.isLoading = isLoading;
    },
    updateRegistrantsLoading(state, isLoading) {
      state.registrants.isLoading = isLoading;
    },
  },
  actions: {
    async createRecord({ commit }, form) {
      commit('updateRegistrantsLoading', true);

      try {
        const {
          first_name,
          middle_name,
          last_name,
          age,
          email,
          gender,
          contact_number,
          paypal,
          address: {
            unit: unitNumber,
            street,
            barangay,
            city,
            state,
            country
          }
        } = form;

        const {
          data: {
            insert_pr_users: {
              returning: [registrant]
            }
          }
        } = await graphqlClient.mutate({
          mutation: registrantQueries.createUserRecord,
          variables: {
            firstName: first_name,
            middleName: middle_name,
            lastName: last_name,
            age,
            email,
            gender,
            contactNumber: contact_number,
            unitNumber,
            street,
            barangay,
            city,
            state,
            country,
            ipAddress: 'Sample IP',
            paypalAccount: paypal
          }
        });

        commit('updateRegistrants', {
          isLoading: false,
          list: [
            registrant
          ]
        });

        commit('updateToastConfig', {
          message: 'Successfuly created new record.',
          variant: 'success'
        }, { root: true });
      } catch (e) {
        commit('updateToastConfig', {
          message: e.message,
          variant: 'danger'
        }, { root: true });
      }
      commit('updateRegistrantsLoading', false);
    }
  }
};