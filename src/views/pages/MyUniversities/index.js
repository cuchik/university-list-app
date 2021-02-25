import React from 'react';

import UniversityCard from 'src/components/UniversityCard';
import Results from 'src/components/Results';
import toast from 'src/helper/toast';

import { useData, useActions } from './selectorData';
import classes from './MyUniversities.module.scss';

const MyUniversities = () => {
  const { myUniversities } = useData();
  const { removeMyUniversity } = useActions();
  return (
    <div className={classes.wrapper}>
      <h1>My Universities</h1>
      <Results>
        {myUniversities.length <= 0 && 'My Universities Empty'}
        <ul>
          {(myUniversities || []).map(university => {
            return (
              <li key={university.id}>
                <UniversityCard
                  data={university}
                  isSaved
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

export default MyUniversities;
