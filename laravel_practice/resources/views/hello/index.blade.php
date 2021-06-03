@extends('layouts.helloapp')
@section('title','Index')
@section('menubar')
    @parent
    インデックスページ
@endsection
@section('content')
   
    @if(count($errors)>0)
        <p>入力に問題があります入力し直してください</p>
    
    @endif
    <form action ="/hello" method="post">
        <table>
           <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
           @foreach($items as $item)
                <tr>
                    <td>{{$item->name}}</td>
                    <td>{{$item->mail}}</td>
                    <td>{{$item->age}}</td>
                </tr>
           @endforeach 

           
        </table>
    </from>
   
  
@endsection

@section("footer")
    copyright 2021 miyagi
@endsection


