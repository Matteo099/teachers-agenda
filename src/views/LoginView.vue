<template>
    <v-container>
        <v-row class="justify-center pt-5 pb-2">
            <v-img contain :src="appLogo" height="50" width="50"></v-img>
        </v-row>
        <v-row class="justify-center pb-10">
            <p class="text-h5 font-weight-bold" v-if="display == 'login'">Accedi al tuo account</p>
            <p class="text-h5 font-weight-bold" v-else>Crea un nuovo account</p>
        </v-row>
        <v-fab-transition>
            <v-row class="justify-center pb-8" v-if="display == 'login'">
                <v-card min-width="400" elevation="3">
                    <v-card-text>
                        <v-form class="ma-2">
                            <v-row class="justify-center">
                                <v-col class="px-2">
                                    <v-text-field density="compact" variant="outlined" v-model="lEmail"
                                        v-bind="lEmailProps" type="email" label="Email" autocomplete="on"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="justify-center">
                                <v-col class="px-2">
                                    <v-text-field density="compact" variant="outlined" v-model="lPassword"
                                        hint="Almeno 8 caratteri" :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        v-bind="lPasswordProps" :type="show1 ? 'text' : 'password'"
                                        @click:append-inner="show1 = !show1" counter label="Password" autocomplete="on"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row class="justify-space-between align-center">
                                <v-col class="px-2">
                                    <v-checkbox density="compact" v-model="remember" label="Ricordati"
                                        hide-details></v-checkbox>
                                </v-col>
                                <v-col class="px-2">
                                    <a class="text-decoration-none text-primary text-body-2 font-weight-medium cursor-pointer"
                                        @click="resetPassword">
                                        Password dimenticata?
                                    </a>
                                </v-col>
                            </v-row>

                            <v-row class="mb-5 justify-center">
                                <v-col class="px-2">
                                    <v-btn class="w-100" variant="flat" color="blue" @click="signIn">Accedi</v-btn>
                                </v-col>
                            </v-row>

                            <v-divider class="my-5">Oppure</v-divider>

                            <v-row class="my-1 justify-center pt-5">
                                <v-col class="px-2">
                                    <v-btn class="w-100 text-body-1" variant="outlined" color="error"
                                        prepend-icon="mdi-google" @click="signInWithGoogle">Google</v-btn>
                                </v-col>
                                <v-col class="px-2">
                                    <v-btn class="w-100 text-body-1" variant="outlined" color="blue"
                                        prepend-icon="mdi-facebook" @click="signInWithFacebook">Facebook</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row class="justify-center pb-8" v-else>
                <v-card min-width="400" elevation="3">
                    <v-card-text>
                        <v-form class="ma-2">
                            <v-row class="justify-center">
                                <v-col class="px-2">
                                    <v-text-field density="compact" variant="outlined" v-model="rName"
                                        v-bind="rNameProps" label="Nome"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="justify-center">
                                <v-col class="px-2">
                                    <v-text-field density="compact" variant="outlined" v-model="rEmail"
                                        v-bind="rEmailProps" type="email" label="Email" autocomplete="on"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="justify-center">
                                <v-col class="px-2">
                                    <v-text-field density="compact" variant="outlined" v-model="rPassword"
                                        hint="Almeno 8 caratteri" :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show2 ? 'text' : 'password'" @click:append-inner="show2 = !show2" counter
                                        v-bind="rPasswordProps" label="Password"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="justify-center">
                                <v-col class="px-2">
                                    <v-text-field density="compact" variant="outlined" v-model="rPasswordConfirm"
                                        :append-inner-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show3 ? 'text' : 'password'" @click:append-inner="show3 = !show3" counter
                                        v-bind="rPasswordConfirmProps" label="Ripeti Password"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row class="mb-5 justify-center">
                                <v-col class="px-2">
                                    <v-btn class="w-100" variant="flat" color="blue" @click="signUp">Registrati</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-row>
        </v-fab-transition>
        <v-row class="justify-center pb-10">
            <div class="text-center text-body-2" v-if="display == 'login'">
                Non hai un account?
                <a class="text-decoration-none text-primary font-weight-medium cursor-pointer"
                    @click="display = 'register'">Registrati</a>
            </div>
            <div class="text-center text-body-2" v-else>
                Hai già un account?
                <a class="text-decoration-none text-primary font-weight-medium cursor-pointer"
                    @click="display = 'login'">Accedi</a>
            </div>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { LocalStorageHandler } from '@/models/storage/local-storage-handler';
import type { UserSettings } from '@/models/storage/storage';
import { googleAuthProvider } from '@/plugins/firebase';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { useForm } from 'vee-validate';
import { onMounted, ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import { useFirebaseAuth } from 'vuefire';
import * as yup from 'yup';

const appLogo = new URL('@/assets/images/logo.jpeg', import.meta.url).href

const signinSchema = yup.object({
    lEmail: yup.string().required("L'email è obbligatoria").label('Email').email(),
    lPassword: yup.string().required('La password è obbligatoria').label('Password').min(8),
})

const signupSchema = yup.object({
    rName: yup.string().label('Nome'),
    rEmail: yup.string().required("L'email è obbligatoria").label('Email').email(),
    rPassword: yup.string().required('La password è obbligatoria').label('Password').min(8),
    rPasswordConfirm: yup.string().oneOf([yup.ref('rPassword')], 'Le passwords devono essere uguali').required().label('Ripeti password'),
})

const signinForm = useForm({ validationSchema: signinSchema })
const signupForm = useForm({ validationSchema: signupSchema })

const vuetifyConfig = (state: any) => ({
    props: {
        'error-messages': state.errors
    }
})

const [lEmail, lEmailProps] = signinForm.defineField('lEmail', vuetifyConfig);
const [lPassword, lPasswordProps] = signinForm.defineField('lPassword', vuetifyConfig);
const [rName, rNameProps] = signupForm.defineField('rName', vuetifyConfig);
const [rEmail, rEmailProps] = signupForm.defineField('rEmail', vuetifyConfig);
const [rPassword, rPasswordProps] = signupForm.defineField('rPassword', vuetifyConfig);
const [rPasswordConfirm, rPasswordConfirmProps] = signupForm.defineField('rPasswordConfirm', vuetifyConfig);
const remember = ref(LocalStorageHandler.getItem('userSettings') ?? false);
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const display = ref('login');
const auth = useFirebaseAuth()!;


watch(display, () => {
    signinForm.resetForm();
    signupForm.resetForm();
})

watch(remember, (newValue) => {
    if (newValue) updateLocalStorage();
    else LocalStorageHandler.removeItem('userSettings');
})

watch(lEmail, () => {
    if (remember.value) updateLocalStorage();
})

function updateLocalStorage() {
    const userSettings: UserSettings = { name: lEmail.value };
    LocalStorageHandler.setItem('userSettings', userSettings);
}

async function signIn() {
    const res = await signinForm.validate();
    if (!res.valid) return;

    signInWithEmailAndPassword(auth, lEmail.value, lPassword.value).catch((reason) => {
        toast.error("Login fallito: " + reason);
        console.error('Failed signin', reason);
    })
}

function signInWithGoogle() {
    signInWithPopup(auth, googleAuthProvider).catch((reason) => {
        toast.error("Login fallito: " + reason);
        console.error('Failed signin', reason);
    })
}

function signInWithFacebook() {
    toast.warn("Login via facebook non disponibile")
    // signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
    //     toast.error("Login fallito: " + reason);
    //     console.error('Failed signin', reason);
    // })
}

async function resetPassword() {
    const res = await signinForm.validateField("lEmail");
    if (!res.valid) {
        toast.warning("Inserisci l'email per effettuare il reset della password. Un link sarà inviato via email!");
        return;
    }

    try {
        await sendPasswordResetEmail(auth, lEmail.value);
        toast.success("Controlla la tua email per effettuare il reset della password!")
    } catch (reason) {
        toast.error("Reset della password fallito: " + reason);
        console.error('Failed reset password', reason);
    }

}

async function signUp() {
    const res = await signupForm.validate();
    if (!res.valid) return;

    try {
        const userCred = await createUserWithEmailAndPassword(auth, rEmail.value, rPassword.value);
        if (rName.value.trim().length > 0) updateProfile(userCred.user, { displayName: rName.value.trim() });
    } catch (reason) {
        toast.error("Registrazione fallita: " + reason);
        console.error('Failed signup', reason);
    }
}

onMounted(() => {
    const savedUserSettings = LocalStorageHandler.getItem('userSettings');
    remember.value = !!savedUserSettings;
    if (savedUserSettings) {
        if (savedUserSettings.name)
            lEmail.value = savedUserSettings.name;
    }
})
</script>