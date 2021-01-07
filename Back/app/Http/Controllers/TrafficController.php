<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use File;

class TrafficController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function list_traffics(Request $request)
    {
        // Load file
        $file = Storage::disk('local')->get('los-angeles-international-airport-passenger-traffic-by-terminal.json');

        // Json decode file
        $data_json_decode = json_decode($file, false);

        // Use collect to use sql request
        $data = collect($data_json_decode)->all();

        return Response::json(['type' => 'success', 'message' => 'List traffic', 'data' => $data, 'status' => 200], 200);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function search_traffics(Request $request)
    {
        // Payload
        $payLoad = json_decode(request()->getContent(), false);

        $offset = $payLoad->config->params->offset;
        $limit = $payLoad->config->params->limit;

        // Load file
        $file = Storage::disk('local')->get('los-angeles-international-airport-passenger-traffic-by-terminal.json');

        // Json decode file
        $data_json_decode = json_decode($file, false);

        // Use collect to use sql request
        $data = collect($data_json_decode)->slice($offset, $limit)->all();

        // Params
        $config = new \stdClass();
        $config->total = count($data_json_decode);
        $config->limit = $limit;
        $config->offset = $offset;

        return Response::json(['type' => 'success', 'message' => 'List traffic', 'config' => $config, 'data' => $data, 'status' => 200], 200);
    }
}
