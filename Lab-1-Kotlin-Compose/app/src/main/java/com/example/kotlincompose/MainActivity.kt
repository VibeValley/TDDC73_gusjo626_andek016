package com.example.kotlincompose

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.ui.res.painterResource
import com.example.kotlincompose.ui.theme.KotlincomposeTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            KotlincomposeTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Greeting(
                        name = "Android",
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}
@Composable
fun ButtonBox(){
    Box(
        modifier = Modifier
            .size(width = 300.dp, height = 130.dp)


    ){
        Text(
            text = "BUTTON",
            color = Color.Black,
            modifier = Modifier
                .clip(RoundedCornerShape(4.dp))
                .background(Color.LightGray)
                .padding(8.dp)
                .align(Alignment.TopStart)

        )
        Text(
            text = "BUTTON",
            color = Color.Black,
            modifier = Modifier
                .clip(RoundedCornerShape(4.dp))
                .background(Color.LightGray)
                .padding(8.dp)
                .align(Alignment.TopEnd)
        )
        Text(
            text = "BUTTON",
            color = Color.Black,
            modifier = Modifier
                .clip(RoundedCornerShape(4.dp))
                .background(Color.LightGray)
                .padding(8.dp)
                .align(Alignment.BottomStart)
        )
        Text(
            text = "BUTTON",
            color = Color.Black,
            modifier = Modifier
                .clip(RoundedCornerShape(4.dp))
                .background(Color.LightGray)
                .padding(8.dp)
                .align(Alignment.BottomEnd)
        )
    }

}
@Composable
fun TopBar(){
    Text(
        text = "Example 1",
        color = Color.White,
        fontSize = 24.sp,
        modifier = Modifier
            .background(Color(0,128,128))
            .fillMaxWidth()
            .padding(24.dp)

    )
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {

    Column (
        horizontalAlignment = Alignment.CenterHorizontally,
        //verticalArrangement = Arrangement.Center,
        modifier = Modifier.fillMaxSize()


    ){

        TopBar()
        Spacer(
            modifier = Modifier.height(32.dp)
        )
        Image(
            painter = painterResource(id = R.drawable.food),
            contentDescription = "Sample Image",
            modifier = Modifier
                .size(150.dp)

        )
        Spacer(
            modifier = Modifier.height(64.dp)
        )
        ButtonBox()
        Row (
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.padding(top = 32.dp)
            ){
            Text(
                text = "Email",
                modifier = Modifier.padding(end = 12.dp)

            )
            TextField(
                value = "",
                onValueChange = {},

            )
        }

    }

}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    KotlincomposeTheme {
        Greeting("Android")
    }
}