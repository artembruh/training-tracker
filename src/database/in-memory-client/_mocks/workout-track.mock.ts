import { type WorkoutTrackEntity } from '../../interface';

export const workoutTrackMock: Array<[string, WorkoutTrackEntity]> = [
  [
    '27d915c4-be4e-4540-897a-11fe2c1c9912',
    {
      id: '27d915c4-be4e-4540-897a-11fe2c1c9912',
      date: 'now',
      workoutExerciseId: '4a1ce2c6-a04c-4741-9e79-84f9195fcc96',
      reps: 10,
      set: 1,
      weight: 20,
      weightUnit: 'kg'
    }
  ],
  [
    '1dd3502a-5981-4f2d-a83f-f6c140188a77',
    {
      id: '1dd3502a-5981-4f2d-a83f-f6c140188a77',
      date: 'now',
      workoutExerciseId: '4a1ce2c6-a04c-4741-9e79-84f9195fcc96',
      reps: 10,
      set: 2,
      weight: 40,
      weightUnit: 'kg'
    }
  ],
  [
    '261e44c5-e191-4d16-a53c-6c60644952e1',
    {
      id: '261e44c5-e191-4d16-a53c-6c60644952e1',
      date: 'now',
      workoutExerciseId: '4a1ce2c6-a04c-4741-9e79-84f9195fcc96',
      reps: 10,
      set: 3,
      weight: 60,
      weightUnit: 'kg'
    }
  ]
];
