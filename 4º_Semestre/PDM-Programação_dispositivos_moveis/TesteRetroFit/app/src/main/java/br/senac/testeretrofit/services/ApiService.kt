package br.senac.testeretrofit.services

import br.senac.testeretrofit.models.login.LoginRequest
import br.senac.testeretrofit.models.login.LoginResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface ApiService {
    @POST("logar")
    fun login(@Body request: LoginRequest): Call<LoginResponse>
}