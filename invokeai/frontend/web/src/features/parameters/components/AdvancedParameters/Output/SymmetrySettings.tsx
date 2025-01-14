import { VStack } from '@chakra-ui/react';
import { RootState } from 'app/store/store';
import { useAppDispatch, useAppSelector } from 'app/store/storeHooks';
import IAISlider from 'common/components/IAISlider';
import {
  setHorizontalSymmetrySteps,
  setVerticalSymmetrySteps,
} from 'features/parameters/store/generationSlice';
import { useTranslation } from 'react-i18next';

export default function SymmetrySettings() {
  const horizontalSymmetrySteps = useAppSelector(
    (state: RootState) => state.generation.horizontalSymmetrySteps
  );

  const verticalSymmetrySteps = useAppSelector(
    (state: RootState) => state.generation.verticalSymmetrySteps
  );

  const steps = useAppSelector((state: RootState) => state.generation.steps);

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  return (
    <VStack gap={2} alignItems="stretch">
      <IAISlider
        label={t('parameters.hSymmetryStep')}
        value={horizontalSymmetrySteps}
        onChange={(v) => dispatch(setHorizontalSymmetrySteps(v))}
        min={0}
        max={steps}
        step={1}
        withInput
        withSliderMarks
        withReset
        handleReset={() => dispatch(setHorizontalSymmetrySteps(0))}
      />
      <IAISlider
        label={t('parameters.vSymmetryStep')}
        value={verticalSymmetrySteps}
        onChange={(v) => dispatch(setVerticalSymmetrySteps(v))}
        min={0}
        max={steps}
        step={1}
        withInput
        withSliderMarks
        withReset
        handleReset={() => dispatch(setVerticalSymmetrySteps(0))}
      />
    </VStack>
  );
}
