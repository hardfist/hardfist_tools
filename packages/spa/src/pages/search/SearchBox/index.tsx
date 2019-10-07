import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as GithubService from 'service/github';
import { thunk, Thunk, action, Action } from 'easy-peasy';
import { useLocalStore } from 'utils/model';
interface SearchParam {
  username: string;
  reponame: string;
}
interface SearchModel {
  searchParam: SearchParam;
  loading: boolean;
  setSearchParam: Action<SearchModel, SearchParam>;
  toggleLoading: Action<SearchModel, boolean>;
  fetchData: Thunk<SearchModel>;
}
const search: SearchModel = {
  searchParam: {
    username: '',
    reponame: ''
  },
  loading: false,
  setSearchParam: action((state, formik) => {
    state.searchParam.reponame = formik.reponame;
    state.searchParam.username = formik.username;
  }),
  toggleLoading: action((state, loading) => {
    state.loading = loading;
  }),
  fetchData: thunk(async ({ toggleLoading }) => {
    toggleLoading(true);
    try {
      await GithubService.user('hardfist');
    } finally {
      toggleLoading(false);
    }
  })
};
export const SearchBox = (props: {
  handleSearch: (param: SearchParam) => void;
}) => {
  const [{ searchParam }, { setSearchParam, fetchData }] = useLocalStore(
    search
  );
  const formik = useFormik<SearchParam>({
    initialValues: {
      username: '',
      reponame: ''
    },
    onSubmit: values => {
      setSearchParam(values);
    }
  });
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <p>Type a username or repo full name and hit 'Go':</p>
      <label>
        username:
        <input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </label>
      <label>
        reponame:
        <input
          name="reponame"
          value={formik.values.reponame}
          onChange={formik.handleChange}
        />
      </label>
      <button onClick={() => props.handleSearch(searchParam)}>GO</button>
    </div>
  );
};
