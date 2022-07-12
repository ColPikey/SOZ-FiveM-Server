import { useNuiEvent } from '@common/hooks/useNuiEvent';
import { PhoneEvents } from '@typings/phone';
import { SettingsEvents } from '@typings/settings';
import { useSetRecoilState } from 'recoil';

import { BankEvents } from '../../../../../typings/bank';
import InjectDebugData from '../../debug/InjectDebugData';
import { simcardState } from './state';
import { useMyPhoneNumber } from './useMyPhoneNumber';

InjectDebugData([
    {
        app: 'SIMCARD',
        method: PhoneEvents.SET_NUMBER,
        data: '111-1134',
    },
    {
        app: 'SOCIETY_SIMCARD',
        method: PhoneEvents.SET_SOCIETY_NUMBER,
        data: '555-LSPD',
    },
    {
        app: 'AVATAR',
        method: SettingsEvents.SET_AVATAR,
        data: 'https://beta.iodine.gg/teUcY.jpeg',
    },
]);

export const useSimcardService = () => {
    const setNumber = useSetRecoilState(simcardState.number);
    const setSocietyNumber = useSetRecoilState(simcardState.societyNumber);
    const setAvatar = useSetRecoilState(simcardState.avatar);
    useNuiEvent('SIMCARD', PhoneEvents.SET_NUMBER, setNumber);
    useNuiEvent('SOCIETY_SIMCARD', PhoneEvents.SET_SOCIETY_NUMBER, setSocietyNumber);
    useNuiEvent('AVATAR', SettingsEvents.SET_AVATAR, setAvatar);
    return useMyPhoneNumber();
};
