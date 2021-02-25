import React, { useState, useEffect } from 'react';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import Input from 'src/components/Input';
import UniversityCard from 'src/components/UniversityCard';
import Results from 'src/components/Results';
import toast from 'src/helper/toast';
import { useActions, useData } from './selectorData';
import classes from './Universities.module.scss';

const Universities = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const {
    getUniversities,
    updateSearchParams,
    addMyUniversity,
    removeMyUniversity,
  } = useActions();
  const {
    universities,
    universitiesLoading,
    myUniversities,
    getUniversitiesStatus,
    searchedParams,
  } = useData();
  const handleSearch = () => {
    const params = {
      name,
      country,
    };
    updateSearchParams(params);
    getUniversities(params);
  };
  useEffect(() => {
    setName(get(searchedParams, 'name', ''));
    setCountry(get(searchedParams, 'country', ''));
  }, [searchedParams]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1>Search Your Universities</h1>
        <div className={classes.searchForm}>
          <Input
            placeholder="Name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            autoFocus
          />
          <Input
            placeholder="Country"
            value={country}
            onChange={e => {
              setCountry(e.target.value);
            }}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
        </div>
      </div>
      <Results>
        {universitiesLoading && 'Loading...'}
        {getUniversitiesStatus === 'init' &&
          !universitiesLoading &&
          'Please search to see the results'}
        {!universitiesLoading &&
          universities.length <= 0 &&
          getUniversitiesStatus !== 'init' &&
          'Not Found'}
        <ul>
          {universities.map(university => {
            const isMine =
              findIndex(myUniversities, { id: university.id }) >= 0;
            return (
              <li key={university.id}>
                <UniversityCard
                  data={university}
                  isSaved={isMine}
                  onSave={() => {
                    addMyUniversity(university, () => {
                      toast.success('Saved this University');
                    });
                  }}
                  onRemove={() => {
                    removeMyUniversity(university.id, () => {
                      toast.success('Removed this University');
                    });
                  }}
                />
              </li>
            );
          })}
        </ul>
      </Results>
    </div>
  );
};

export default Universities;
