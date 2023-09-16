<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Jubaer\Zoom\Facades\Zoom;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ZoomController extends Controller
{
    public function create(Request $request): Response
    {

        $startDate = '2023-09-16'; //$request->start_date;
        $time =  '08:00:00'; //$request->start_time;
        $description = 'My agenda'; // $request->description;
        $topic  = 'Testing topic'; // $request->topic;
        $duration  = 30; // $request->duration;


        $startTime = $startDate . ' ' . $time;
        $startTime =  Carbon::createFromFormat('Y-m-d H:i:s', $startTime, 'Asia/Rangoon')->setTimezone('UTC')->format('Y-m-d\TH:i:s\Z');

        // dd($startTime);
        $password = $this->randomPassword();
        $meetings = Zoom::createMeeting([
            "agenda" => $description,
            "topic" => $topic,
            "type" => 2, // 1 => instant, 2 => scheduled, 3 => recurring with no fixed time, 8 => recurring with fixed time
            "duration" => $duration, // in minutes
            "timezone" => 'Asia/Rangoon', // set your timezone
            "password" => $password,
            "start_time" => $startTime,
            "template_id" => 'gpeeHVUNTR-ZLz9aFUE67w', // set your template id  Ex: "Dv4YdINdTk+Z5RToadh5ug==" from https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingtemplates
            "pre_schedule" => false,  // set true if you want to create a pre-scheduled meeting
            "schedule_for" => 'thixpin@gmail.com', // set your schedule for
            "settings" => [
                'join_before_host' => true, // if you want to join before host set true otherwise set false
                'host_video' => false, // if you want to start video when host join set true otherwise set false
                'participant_video' => false, // if you want to start video when participants join set true otherwise set false
                'mute_upon_entry' => false, // if you want to mute participants when they join the meeting set true otherwise set false
                'waiting_room' => true, // if you want to use waiting room for participants set true otherwise set false
                'audio' => 'both', // values are 'both', 'telephony', 'voip'. default is both.
                'auto_recording' => 'none', // values are 'none', 'local', 'cloud'. default is none.
                'approval_type' => 0, // 0 => Automatically Approve, 1 => Manually Approve, 2 => No Registration Required
            ],

        ]);

        info('meetings', [$meetings]);
        dd($meetings);

        return Inertia::render('Zoom/Create', [
            'meetings' => $meetings
        ]);

    }

    private function randomPassword() {
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        $pass = array(); 
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 10; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass); //turn the array into a string
    }
}
